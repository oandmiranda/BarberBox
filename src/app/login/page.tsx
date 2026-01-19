import LoginForm from "@/components/auth/loginForm";

type Props = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: Props) {

const callbackUrl = searchParams.callbackUrl
  ? decodeURIComponent(searchParams.callbackUrl)
  : "/dashboard";
  return (
    <>
     <LoginForm callbackUrl={callbackUrl}/>
    </>
  );
}
