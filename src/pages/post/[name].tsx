import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  name: string;
}

export default function Post({ name }: Props) {
  return <div>Dynamic Name: {name}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: "Hello" } }, { params: { name: "World" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      name: params?.name as string,
    },
  };
};
