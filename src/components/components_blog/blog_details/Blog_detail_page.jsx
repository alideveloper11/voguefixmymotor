export default function Blog_detail({ result }) {
  const { blog } = result;

  if (!blog) {
    return (
      <div className="flex flex-wrap w-full">
        <p className="text-xl text-[red]">Unable to load blog. Please try again later.</p>
      </div>
    );
  }

  const rawSchema = blog.schema ?? blog.json_ld ?? blog.structured_data ?? null;
  let jsonLd = null;
  if (rawSchema) {
    try {
      const parsed =
        typeof rawSchema === "string" ? JSON.parse(rawSchema) : rawSchema;
      jsonLd = JSON.stringify(parsed).replace(/</g, "\\u003c");
    } catch {
      jsonLd =
        typeof rawSchema === "string" ? rawSchema.replace(/</g, "\\u003c") : null;
    }
  }

   return (
   <div className="blog_detail flex flex-wrap">
  {jsonLd && (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  )}
  <div className="w-full  flex flex-wrap ">
  <div className="shadow-[0_0px_1px_#4CFF3D] mt-2  w-full rounded-3xl flex flex-wrap overflow-hidden">
    <div className=" w-full">
      <img
  src={blog.images?.[0]?.image}
  className="w-full first_blog_image h-full object-cover"
  alt={blog.title}
/>
    </div>

  </div>
</div>

  <div className="w-full py-5 ">
    <div className="w-full">
      <div className="">
        <h1 className="font-bold text-3xl"  dangerouslySetInnerHTML={{ __html:  blog.title }}>
        </h1>
      </div>

      <div
        className=""
        dangerouslySetInnerHTML={{ __html: blog.excerpt }}
      />
    </div>
  </div>



              <div className="w-full">
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: blog.content }}>

                </div>
              </div>









    </div>
  );
}
