import { useId } from "react"

export default function InputUseId({label}) {

    const id = useId();
    
    return (
        <>
            <div className="flex flex-row gap-3 my-3">
                <label className="text-white py-3" htmlFor={id}>
                    {label}
                </label>
                <input id={id} className="bg-white border-none rounded-md" />
            </div>
        </>
    )
}