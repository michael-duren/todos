interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="h-full w-full min-h-[100vh] p-8">{children}</div>;
}
