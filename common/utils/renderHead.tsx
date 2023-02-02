import Head from "next/head";

interface IHead {
  title: String;
  description: string;
  keywords: string;
}

function RenderHead({ title, description, keywords }: IHead) {
  const siteName: string = "Site Name goes here";
  const siteUrl: string = "Site URL goes here";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords}></meta>
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="author" content="Harel Peri"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default RenderHead;
