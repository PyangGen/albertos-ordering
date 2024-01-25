export default function SectionHeaders({subHeader,mainHeader}) {
    return (
      <>
        <h3 className="">
          {subHeader}
        </h3>
        <h2 className="">
          {mainHeader}
        </h2>
      </>
    );
  }