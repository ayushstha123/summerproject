import PackageItems from "../package/PackageItems";

export default function Packages() {
    return (
        <>

            <div className="py-10 mt-32 text-center">
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                    Our Packages
                </h2>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <PackageItems/>
            <PackageItems/>
            <PackageItems/>
            <PackageItems/>
            <PackageItems/>
</div>

        </>
    )
}