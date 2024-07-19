import asyncHandler from 'express-async-handler'

import { prisma } from "../config/prismaConfig.js";

//处理用户注册请求
export const createUser = asyncHandler(async(req,res)=>{
    console.log("creating a user");

    let{email} = req.body;

    const userExists = await prisma.user.findUnique({where:{email:email}})

    if(!userExists){
        const user = await prisma.user.create({data: req.body})
        res.send({
            Message:"User registered successfully",
            user: user,
        });
    }else res.status(201).send({message: "user already registered"})
});

//处理预约请求
export const bookVisit = asyncHandler(async(req,res)=>{
    const {email, date} = req.body
    const {id} = req.params
    try{

        const alreadyBooked = await prisma.user.findUnique({
            where:{email:email},
            select:{bookedVisits:true},
        })

        if(alreadyBooked.bookedVisits.some((visit) => visit.id ===id)){
            res.status(400).json({message:"this residency is already booked by you"});
        }else{
            await prisma.user.update({
                where:{email:email},
                data:{
                    bookedVisits:{push:{id, date}}
                },
            });
            res.send("your visit is booked successfully");
        }
        
    }catch(err){
        throw new Error(err.message);
    }
})

//获取所有预定信息
export const getAllBookings = asyncHandler(async(req,res)=>{
    const {email} = req.body
    try{
        const bookings = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })
        res.status(200).send(bookings)
    }catch(err){
        throw new Error(err.message);
    }
})

//取消预约
export const cancelBookings = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const {id} = req.params;
    try{
        const user = await prisma.user.findUnique(
            {
                where:{email: email},
                select: {bookedVisits: true}
            })
            //在一个具体的user中，在bookedVisits这个array中iterate，visit会在里面看每个bookedvisits，直到找到一个bookedvisits的id跟请求url里id一样，这个具体的bookedvisits就会被返回到index
            const index = user.bookedVisits.findIndex((visit)=>visit.id ===id)

            if(index === -1){
                res.status(404).json({message:"Booking not found"})
            }else{
                //删除1个元素，元素就是上面找到的bookedvisit（index）
                user.bookedVisits.splice(index,1);
                await prisma.user.update({
                    where: {email},
                    data:{
                        bookedVisits:user.bookedVisits
                    }
                })
                res.send("Booking cancel successfully")
            }
            
    }catch(err){
        throw new Error(err.message);
    }
})

//处理收藏

export const toFav = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const {rid} = req.params;

    try{
        const user = await prisma.user.findUnique({
            where:{email}
        })
        if(user.favResidenciesID.includes(rid)){
            const updateUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesID:{
                        //filter 创建新的数组
                        set: user.favResidenciesID.filter((id)=>id !==rid)
                    }
                }
            })
            res.send({message: " Removed from favorites", user: updateUser})
        }else{
            const updateUser = await prisma.user.update({
                where: {email},
                data:{
                    favResidenciesID:{
                        push:rid
                    }
                }
            })
            res.send({message: "Updated favorites", user:updateUser})
        }
    }catch(err){
        throw new Error(err.message);
    }
})

//获取所有收藏
export const getAllFav = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    try{
        const favResid  = await prisma.user.findUnique({
            where: {email},
            select: {favResidenciesID: true}
        })
        res.status(200).send(favResid)
    }catch(err){
        throw new Error(err.message);
    }
})