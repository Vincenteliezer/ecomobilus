"use client";
import Image from "next/image";
import React from "react";
import Logo from "/public/icons/logo-full.png";
import CenterLayout from "../layouts/center-layout";
import { Button, Card } from "antd";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-white py-2 px-4 lg:px-0">
        <CenterLayout>
          <p>EcomobilusTechnologies Limited</p>
        </CenterLayout>
      </div>

      <div className="sticky top-0 z-50">
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
                    <Link href="/careers">
                      <Button
                        type="link"
                        style={
                          pathname === "/careers"
                            ? { color: "cyan" }
                            : { color: "white" }
                        }
                      >
                        Careers
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
      </div>
    </>
  );
}
