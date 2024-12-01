import { Drawer } from 'antd'
import { X } from 'lucide-react'
import React from 'react'

export default function AntDrawer({ title, onClose, open, children }) {

    return (
        <Drawer
            title={title}
            onClose={onClose}
            open={open}
            placement='left'
            closeIcon={<X color='cyan' size={20} />}
            styles={{ body: { backgroundColor: "#020747" }, header: { backgroundColor: "#020747", color: "white" } }} width={"80%"}
        >
            {children}
        </Drawer>
    )
}
