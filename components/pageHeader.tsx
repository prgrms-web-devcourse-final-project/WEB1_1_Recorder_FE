type Props = {
  title: string;
  children?: React.ReactNode;
};

const PageHeader = ({ title, children }: Props) => {
  return (
    <div className="flex justify-between">
      <h2 className="border-l-8 border-l-primary pl-5 text-3xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default PageHeader;
