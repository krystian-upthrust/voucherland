import React from 'react'

export default function PageHeader({page_title, create_btn_name }) {
  return (
    <section className="page_header">
        <h2>{page_title}</h2>
          <div className="header_btns">
            <button className="create_btn">{create_btn_name}</button>
            <button className="delete_btn">delete</button>
          </div>
    </section>
  )
}
