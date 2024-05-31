const CenteredHero = (props: {
  title: React.ReactNode;
  description: string;
}) => (
  <>
    <div className="text-center text-4xl font-bold tracking-tight">
      {props.title}
    </div>

    <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
      {props.description}
    </div>

    {/* <div className="mt-10"> */}
    {/*  <FileUpload /> */}
    {/* </div> */}
  </>
);

export { CenteredHero };
