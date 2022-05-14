
import React from "react"

const Layout = ({ children }) => {

  return (
    <>
      <div className="container bg-white">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
