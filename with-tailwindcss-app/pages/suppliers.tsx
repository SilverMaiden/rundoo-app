import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import prisma from "../lib/prisma";
import {
  SupplierProps,
  SuppliersPageContent,
} from "./components/SuppliersPageContent";


const Suppliers = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SuppliersPageContent  />
    </div>
  );
};

export default Suppliers;
