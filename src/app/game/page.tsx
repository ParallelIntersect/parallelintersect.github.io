import Link from 'next/link'
import React from 'react'

export default function Game() {
    return (
        <div className="text-center">
            <h1 >Games</h1>
            <p>Browse the Whole Catalog of Engaging Games</p>
            <Link href="/game/runningcube"> Running Cube</Link>
        </div>
    )
}
