
export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  // Single Insert Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.user.create({
  //     data: {
  //       firstName: "John",
  //       middleName: "Bill",
  //       lastName: "Doe",
  //       email: "john@example.com", // Make sure this email is unique
  //       // Add other required fields here
  //     },
  //   });

  //   return NextResponse.json({
  //     status: "Success",
  //     result: { ...result, id: result.id.toString() },
  //   });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Insert Many Data
  // try {
  //   const prisma = new PrismaClient();

  //   const result = await prisma.user.createMany({
  //     data: [
  //       {
  //         firstName: "John",
  //         middleName: "Bill",
  //         lastName: "Doe",
  //         email: "john@example1.com",
  //       },
  //       {
  //         firstName: "John",
  //         middleName: "Bill",
  //         lastName: "Doe",
  //         email: "john@example2.com",
  //       },
  //       {
  //         firstName: "John",
  //         middleName: "Bill",
  //         lastName: "Doe",
  //         email: "john@example3.com",
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
  //   let result = await prisma.user.findMany();

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Read Single Data
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.user.findUnique({
  //     // By unique identifier
  //     where: {
  //       email: "john@example.com",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // !  Delete Single Data by contains
  // try {
  //   const prisma = new PrismaClient();

  //   let result = await prisma.user.delete({
  //     where: { email: "john@example.com" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //  Update Single 
//   try {
//     const prisma = new PrismaClient();

//     let result = await prisma.user.update({
//       where: { email: "john@example1.com" },
//       data: {
//         firstName: "Son",
//       },
//     });
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (err) {
//     return NextResponse.json({ status: "Fail", result: err.toString() });
//   }

 }