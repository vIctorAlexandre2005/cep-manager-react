import { JSX } from "react";

export function Loader({loader}: {loader: JSX.Element}) {
    return <div className="loader">{loader}</div>
}