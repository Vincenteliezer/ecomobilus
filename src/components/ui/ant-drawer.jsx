import { Drawer } from 'antd'
import React from 'react'

export default function AntDrawer({ title, onClose, open, children }) {

    return (
        <Drawer title={title} onClose={onClose} open={open} placement='left' styles={{ body: { backgroundColor: "#020747" }}} width={"80%"}>
           {children}
        </Drawer>
    )
}
