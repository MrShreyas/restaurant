import ViewCount  from "@/model/usercount"
import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest, ) {
    await connect();
    let viewCount = await ViewCount.findOne();
    if (viewCount) {
      console.log(viewCount);
    }else{
      console.log("cannot find");
      
    }
      if (!viewCount) {
        viewCount = new ViewCount();
        await viewCount.save();
      } else {
        viewCount.count += 1;
        await viewCount.save();
    }
    return NextResponse.json(viewCount)
  }