import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const kofi = `<script>
  kofiWidgetOverlay.draw('yangtuananh', {
    'type': 'floating-chat',
  'floating-chat.donateButton.text': 'Support me',
  'floating-chat.donateButton.background-color': '#00b9fe',
  'floating-chat.donateButton.text-color': '#fff'
});
</script>`
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manrope"></link>
        <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div dangerouslySetInnerHTML={{ __html: kofi }} />
      </body>
    </Html>
  )
}
