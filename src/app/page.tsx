'use client'
import Image from "next/image";
import {Button} from "antd";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  if(router) {
    router.replace('/search')
  }
}
