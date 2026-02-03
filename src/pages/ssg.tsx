import { GetStaticProps } from "next";

interface Props {
  message: string;
}

export default function SSGPage({ message }: Props) {
  return <div>SSG page message: {message}</div>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      message: "SSG page",
    },
  };
};
