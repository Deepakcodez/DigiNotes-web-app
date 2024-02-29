import Image from "next/image"

export default function Welcome(){

    return(
        <>
        <div>
            <Image
            src='/welcomeimg.jpg'
            width={1600}
            height={100}
            alt="image"
            ></Image>
        </div>
        </>
    )
}