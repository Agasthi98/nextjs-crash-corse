interface DynamicPageProps {
    params: {
      dpath: string[]; // `dpath` is an array of path segments
    };
  }
  
  export default async function DynamicPage({ params }: DynamicPageProps) {
    // Ensure `params.dpath` is available
  
    // Await the params object (if necessary)
    const { dpath } = await params;

    if(!dpath) {
      return <div>No path segments found.</div>;
    }
  
    return (
      <div>
        <h3>Dynamic Path Segments:</h3>
        <ul>
          {dpath.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>
      </div>
    );
  }