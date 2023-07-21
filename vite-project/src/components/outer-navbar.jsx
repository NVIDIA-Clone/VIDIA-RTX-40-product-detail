

const OuterNavbar = () => {
    return (
        <div class="py-2 bg-neutral-800">
            <div class="flex flex-wrap bg-neutral-800">
                <button class="font-sans text-white border-none bg-inherit py-2 px-2 ml-32">Architecture</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">Performance</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">Ray Tracing</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">DLSS 3</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">Reflex</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">Create</button>
                <button class="font-sans text-white border-none bg-inherit py-2 px-2">Specs</button>
                <button class="font-sans bg-lime-600 hover:bg-lime-500 ml-80">Shop</button>
            </div>
            <div class="bg-lime-500 border-solid border-lime-500"></div>
        </div>
    )
}

export default OuterNavbar