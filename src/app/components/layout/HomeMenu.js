import Image from "next/image";

export default function HeroMenu(){
    return(
        <>
        <div className="py-10 mt-32 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
Discover our foods            </h2>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/drinks.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/Buffet.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/chicken.jpeg'} width={1000} height={1000} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/chowmin.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/selroti.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/jalebi.jpg'} width={1000} height={1000} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/pannercurry.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/newariFood.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/newaribuffet.jpg'} width={1000} height={1000} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/chiwura.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/buffet3.jpg'} width={1000} height={1000} alt=""/>
        </div>
        <div>
        <Image class="h-auto max-w-full rounded-lg" src={'/MenuSection/pannercurry.jpg'} width={1000} height={1000} alt=""/>
        </div>
    </div>
</div>

        </>
    )
}