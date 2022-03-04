import React from "react";

export default function PublicVouchersTab({ vouchers_date, pulbic_vouchers }) {

//  event.target.classList.contains('public_voucher_tabitem') || event.target.classList.contains('item_header')

  const ToggleTab = (event) => {
    const toggle = document.getElementsByClassName('public_voucher_tabitem')[0];
    const vouchercontent = document.getElementsByClassName('vouchers_collection')[0];
    console.log(vouchercontent);

    console.log(document.getElementsByClassName('vouchers_collection')[0].getBoundingClientRect().height)

    if(event.target.classList.contains('item_header')) {
      
      if(!toggle.classList.contains('active_tab')) {
        toggle.classList.add('active_tab');

        setTimeout(()=> {
          toggle.classList.add('active_tab_content');
          console.log(vouchercontent);
        }, 3500);


      } else {
        toggle.classList.remove('active_tab_content');

        setTimeout(() => {
          toggle.classList.remove('active_tab');
        }, 1500);
      }
    }
  }

  return (
    <section className="public_voucher_tabitem" >
      <article className="item_header voucher_tab" onClick={ToggleTab} >
        <p className="date">{vouchers_date} </p>
        <div className="colapse_minus">
          <div className="line" />
          <div className="line close_tab" />
        </div>
      </article>

      <article className="vouchers_collection">{pulbic_vouchers}</article>
    </section>
  );
}
