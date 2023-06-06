"use client";

import Image from 'next/image'
import {useEffect, useState} from "react";
import {DateTime} from "luxon";

export default function Home() {
    const [date, setClock] = useState(DateTime.fromMillis(0));
    const [secondTicker, setSecondTicker] = useState(true);

    useEffect(() => {
        const secondTickerInterval = setInterval(() => {
            setSecondTicker(!secondTicker);
        }, 1000)
        return (() => clearInterval(secondTickerInterval));
    }, [secondTicker])

    useEffect(() => {
        const setClockInterval: NodeJS.Timer = setInterval(() => {
            setClock(DateTime.now);
        }, 1)
        return (() => clearInterval(setClockInterval));
    }, [])

    return (
        <main className="bg-black h-full w-full">
            {/*<div className={"absolute text-white left-0"}>*/}
            {/*    <p>clock: {date.toISO()}</p>*/}
            {/*    <p>secondTicker: {secondTicker ? "true" : "false"}</p>*/}
            {/*</div>*/}
            <div className={"h-full flex items-center justify-center"}>
                <div className={"w-10/12 text-center"}>
                    <div className={"flex border-b-8 border-red-700 justify-center"}>
                        <p className={"w-48 text-white text-9xl"}>{date.toFormat("HH")}</p>
                        <p className={`w-8 ${secondTicker ? "text-gray-800" : "text-white"} text-9xl`}>:</p>
                        <p className={"w-48 text-white text-9xl"}>{date.toFormat("mm")}</p>
                        <p className={`w-8 ${secondTicker ? "text-gray-800" : "text-white"} text-9xl`}>:</p>
                        <p className={"w-48 text-white text-9xl"}>{date.toFormat("ss")}</p>
                        {/*<p className={`w-8 ${secondTicker ? "text-white" : "text-gray-800"} text-3xl`}>.</p>*/}
                        {/*<p className={"w-48 text-white text-3xl"}>{date.toFormat("SSS")}</p>*/}
                    </div>
                    <div className={"grid grid-cols-2"}>
                        <div>
                            <h1 className={"text-gray-400 text-2xl"}>{date.toFormat("dd MMMM yyyy")}</h1>
                        </div>
                        <div>
                            <h1 className={"text-gray-400 text-2xl"}>Week {date.toFormat("W")}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
