import asyncHandler from 'express-async-handler'

import { prisma } from "../config/prismaConfig.js";


export const createResidency = asyncHandler(async(req,res)=>{
    const {title, description, price, address, country, city, facilities, image, userEmail,} = req.body.data;

    try{
        const residency = await prisma.residency.create({
            data:{
                title, description, price, address, country, city, facilities, image, owner:{connect:{email:userEmail}},
            },
        });
        res.send({message:"Residency created successfully", residency})
    }catch(err){
        if(err.code === "P2002"){
            throw new Error("Residency with address already here");
        }throw new Error(err.message);
    }
});

//function to get all the documents /residencies
export const getAllResidencies = asyncHandler(async(req,res)=>{
    const residencies = await prisma.residency.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });
    res.send(residencies);
});

//function to ge a specific document/residency
export const getResidency = asyncHandler(async(req,res)=>{
    //禁用缓存
    res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires',0);
    res.setHeader('Surrogate-Control', 'no-store');

    const {id}=req.params;

    try{
        const residency =  await prisma.residency.findUnique({
            where: {id},
        });
        res.send(residency);
    }catch(err){
        // throw new Error(err.message);
        console.error("error fetching residency:", err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});