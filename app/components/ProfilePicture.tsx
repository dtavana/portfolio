import dtavanaPicture from "/images/dtavana-picture.jpg"

export default function ProfilePicture() {
    return (
        <div className="flex justify-center items-center">
            <div style={{ borderRadius: "50%" }} className="cursor-pointer mt-8 animate__animated animate__fadeIn delay duration-300 ease hover:border-green-400 shadow-md border-8 inline-block">
                <img
                    className="rounded-full w-[320px] h-[320px]"
                    src={dtavanaPicture}
                    alt="dtavana"
                />
            </div>
        </div>
    )
}