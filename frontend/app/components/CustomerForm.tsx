"use client";

import { useState, type FormEvent } from "react";

type Customer = {
  name: string;
  email: string;
  product: string;
};

export default function CustomerForm({ products }: { products: string[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(products[0] ?? "");
  const [submitted, setSubmitted] = useState<Customer | null>(null);

  // 아직 서버가 없으므로 입력값을 화면에만 보여준다
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted({ name, email, product });
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-700 focus:outline-none";

  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-zinc-900">고객 등록</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <label className="text-sm font-medium text-zinc-700">
          이름
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          이메일
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          관심 상품
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={inputClass}
          >
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-md bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          등록하기
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded-md bg-blue-50 p-4 text-zinc-800">
          <p className="font-semibold">등록된 정보</p>
          <p>이름: {submitted.name}</p>
          <p>이메일: {submitted.email}</p>
          <p>관심 상품: {submitted.product}</p>
        </div>
      )}
    </section>
  );
}
