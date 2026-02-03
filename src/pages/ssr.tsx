import { GetServerSideProps } from "next";

interface Props {
  message: string;
}

export default function SSRPage({ message }: Props) {
  return <div>SSR page message: {message}</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      message: "SSR page",
    },
  };
};
