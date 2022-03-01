import React from 'react'
import AdminNav from '../../components/Admin/AdminNav'
import AdminVouchers from '../../components/Admin/AdminVouchers'

export default function AdminPage() {
  return (
    <section className="admin">
        <AdminNav />
        <div className="admin_content">
            <AdminVouchers />
        </div>
    </section>
  )
}
