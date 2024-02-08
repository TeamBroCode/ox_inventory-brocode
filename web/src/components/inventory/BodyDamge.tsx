import Body from "../../utils/Body";
import { useAppSelector } from "../../store";
import { useState, useEffect } from "react";

export default function BodyDamage() {
    const damagevar = useAppSelector((state) => state.damage.data)
    return (
        <div style={{
            position: 'absolute',
            marginLeft: '-75vw',
        }}>
            <Body
                detaileddata={damagevar}
            />
        </div>
    )
}