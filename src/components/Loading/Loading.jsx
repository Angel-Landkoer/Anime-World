import { Spinner } from "../Spinner/Spinner";

export function Loading() {
  return (
    <>
      <main>
        <section className="main flex justify-center items-center w-full h-screen bg-suzuGrey">
          <Spinner color="#000" status="loading" />
        </section>
      </main>
    </>
  );
}
