import { useState } from "react"

const Gallery = () => {
    const [currentImg, setCurrentImg] = useState(1)

    return (
        <div className="bg-NVBGGray">
            <div className="h-20 ">
                <h1 className="text-white">Gallery</h1>
            </div>
        </div>
    )
}

export default Gallery