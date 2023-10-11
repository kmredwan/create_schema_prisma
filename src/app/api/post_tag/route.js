
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //  Single  Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post_tag.create({
  //     data: {
  //       Post_id: 1,
  //       Category_id: 2,
  //     },
  //   });

  //   return NextResponse.json({
  //     status: "Success",
  //     result: { ...result, id: result.id.toString() },
  //   });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //   Insert Many Data
  // try {
  //   const prisma = new PrismaClient();

  //   const result = await prisma.post_tag.createMany({
  //     data: [
  //       {
  //         Post_id: 1,
  //         Category_id: 2,
  //       },
  //       {
  //         Post_id: 3,
  //         Category_id: 4,
  //       },
  //       {
  //         Post_id: 5,
  //         Category_id: 6,
  //       },
  //       {
  //         Post_id: 7,
  //         Category_id: 8,
  //       },

  //       // Add more user data objects here if needed
  //     ],
  //     skipDuplicates: true, // Skip duplicates
  //   });
  //   console.log(result);
  //   return NextResponse.json({
  //     status: "Success",
  //     result: result,
  //   });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //   Read All Data
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.post_tag.findMany();

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //!  Read Single Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post_tag.findUnique({
  //     // By unique identifier
  //     where: {
  //       Category_id: 8,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Delete Single Data by contains
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post_tag.delete({
  //     where: { Category_id: 8 },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //   Update Single Data by contains
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.post_tag.update({
  //     where: { Category_id: 6 },
  //     data: {
  //       Post_id: 100,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }
}