import Document, { DocumentContext, DocumentProps, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

interface MyDocumentProps extends DocumentProps {
  styleTags: ReactElement[]
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>NextJS Template with Styled Components, Typescript...</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
