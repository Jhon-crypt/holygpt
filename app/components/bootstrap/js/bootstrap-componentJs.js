"use client"

import { useEffect } from "react"

export default function BootstrapComponentJs() {

    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js')
    }, [])

    return null

}