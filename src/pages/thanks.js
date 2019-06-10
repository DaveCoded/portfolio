import React from "react"
import Layout from "../components/layout"

const success = () => {
  return (
    <Layout>
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "var(--color-primary)" }}>
          Thank you for submitting!
        </h1>
      </main>
    </Layout>
  )
}

export default success
