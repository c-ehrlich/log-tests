export const dynamic = "force-dynamic";

const handler = () => {
  throw new Error(`Boom`);
};

export { handler as GET };
