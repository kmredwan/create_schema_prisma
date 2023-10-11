
export async function GET(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    }

    //  Single  Data

    try {
    const prisma = new PrismaClient();

    let result = await prisma.post.create({
      data: {
        title: "Hello prisma",
        summary: "It is ORM",
      },
    });

    return NextResponse.json({
      status: "Success",
      result: { ...result, id: result.id.toString() },
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
   }



   //   Insert Many Data
//   try {
//     const prisma = new PrismaClient();

//     const result = await prisma.post.createMany({
//       data: [
//         {
//           title: "Hello prisma",
//           summary: "It is ORM",
//         },
//         {
//           title: "Hello prisma",
//           summary: "It is ORM",
//         },
//         {
//           title: "VueJs",
//           summary: "It is JavaScript Fremwork",
//         },
//         {
//           title: "NuxtJs",
//           summary: "It is Vue Fremwork",
//         },
//         // Add more user data objects here if needed
//       ],
//       skipDuplicates: true, // Skip duplicates
//     });
//     console.log(result);
//     return NextResponse.json({
//       status: "Success",
//       result: result,
//     });
//   } catch (err) {
//     return NextResponse.json({ status: "Fail", result: err.toString() });
//   }


  //  Delete Single 
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post.delete({
  //     where: { summary: "It is JavaScript Fremwork" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Update Single Data 
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post.update({
  //     where: { summary: "It is Js Fremwork" },
  //     data: {
  //       title: "AstroJs",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }


}