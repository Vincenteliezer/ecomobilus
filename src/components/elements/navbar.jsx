"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/icons/logo-full.png";
import CenterLayout from "../layouts/center-layout";
import { Button, Card } from "antd";
import Link from "next/link";
import { HomeIcon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import AntDrawer from "../ui/ant-drawer";

export default function Navbar() {
  const pathname = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <AntDrawer title={(
        <div>
          <p className="text-nowrap text-white overflow-ellipsis">Ecomobilus Technologies Ltd</p>
        </div>
      )}
        open={isDrawerOpen} onClose={closeDrawer}>

        <Link href="/">
          <Image
            src={Logo}
            alt="Ecomobilus logo"
            className="h-16 w-auto"
            placeholder="blur"
          />
        </Link>

        <ul className="text-white space-y-6 mt-10">
          <li>
            <Link href="/">
              <Button
                style={
                  pathname === "/"
                    ? { color: "cyan" }
                    : { color: "white" }
                }
                type="text"
                icon={<HomeIcon size={15} />}
              >
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button
                type="link"
                style={
                  pathname === "/about"
                    ? { color: "cyan" }
                    : { color: "white" }
                }
              >
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <Button
                type="link"
                style={
                  pathname === "/products"
                    ? { color: "cyan" }
                    : { color: "white" }
                }
              >
                Products & services
              </Button>
            </Link>
          </li>

          <li>
            <Link href="/findus">
              <Button
                type="link"
                style={
                  pathname === "/findus"
                    ? { color: "cyan" }
                    : { color: "white" }
                }
              >
                Find us
              </Button>
            </Link>
          </li>
        </ul>
      </AntDrawer>

      <header role="banner" className="bg-white py-2 px-4 lg:px-0">
        <CenterLayout>
          <p>EcomobilusTechnologies Limited</p>
        </CenterLayout>
      </header>

      <nav className="sticky top-0 z-50" role="navigation">
        <Card
          style={{ backgroundColor: "#020747", border: 0, borderRadius: 0 }}
          styles={{ body: { padding: 0 } }}
        >
          <CenterLayout className="px-4 lg:px-0 py-2">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Ecomobilus logo"
                  className="h-16 w-auto"
                  placeholder="blur"
                />
              </Link>

              <div className="lg:hidden">
                <Button type="text" icon={<Menu color="white" size={30} onClick={() => openDrawer()} />} />
              </div>

              <div className="hidden lg:block">
                <ul className="flex text-white">
                  <li>
                    <Link href="/">
                      <Button
                        style={
                          pathname === "/"
                            ? { color: "cyan" }
                            : { color: "white" }
                        }
                        type="text"
                        icon={<HomeIcon size={15} />}
                      >
                        Home
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <Button
                        type="link"
                        style={
                          pathname === "/about"
                            ? { color: "cyan" }
                            : { color: "white" }
                        }
                      >
                        About
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <Button
                        type="link"
                        style={
                          pathname === "/products"
                            ? { color: "cyan" }
                            : { color: "white" }
                        }
                      >
                        Products & services
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/findus">
                      <Button
                        type="link"
                        style={
                          pathname === "/findus"
                            ? { color: "cyan" }
                            : { color: "white" }
                        }
                      >
                        Find us
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CenterLayout>
        </Card>
      </nav>
    </>
  );
}
