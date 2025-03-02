import { useLazyFetchTaiFexQuery } from "../stores";
import Button from "../components/Button";

interface TaiFexDataItem {
  Date: string;
  Contract: string;
  ContractName: string;
  SettlementMonth: string;
  TypeOfTraders: string;
  Top5Buy: string;
  Top5Sell: string;
  Top10Buy: string;
  Top10Sell: string;
  OIOfMarket: string;
}

function DetailsPage() {
  const [fetchData, { data, error, isLoading }] = useLazyFetchTaiFexQuery();

  const handleClick = async () => {
    await fetchData(undefined);
  };

  const headerBtn = (
    <Button primary rounded outline onClick={handleClick} disabled={isLoading}>
      {isLoading ? "取得中，請稍後..." : "取得資料"}
    </Button>
  );

  let content;
  if (isLoading) {
    content = <div>正在取得資料...</div>;
  } else if (error) {
    content = (
      <div>
        取得資料有問題啊
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  } else if (data && Array.isArray(data)) {
    content = (
      <div>
        <h2 className="text-xl font-bold mb-4">期貨大額交易人未平倉</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">日期</th>
              <th className="border p-2">契約</th>
              <th className="border p-2">商品名稱(契約名稱)</th>
              <th className="border p-2">到期月份(週別)</th>
              <th className="border p-2">交易人類別</th>
              <th className="border p-2">前五大交易人買方</th>
              <th className="border p-2">前五大交易人賣方</th>
              <th className="border p-2">前十大交易人買方</th>
              <th className="border p-2">前十大交易人賣方</th>
              <th className="border p-2">全市場未沖銷部位數</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: TaiFexDataItem, index: number) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.Date}</td>
                <td className="border p-2">{item.Contract}</td>
                <td className="border p-2">{item.ContractName}</td>
                <td className="border p-2">{item.SettlementMonth}</td>
                <td className="border p-2">{item.TypeOfTraders}</td>
                <td className="border p-2">{item.Top5Buy}</td>
                <td className="border p-2">{item.Top5Sell}</td>
                <td className="border p-2">{item.Top10Buy}</td>
                <td className="border p-2">{item.Top10Sell}</td>
                <td className="border p-2">{item.OIOfMarket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2">{headerBtn}</div>
      <div>{content}</div>
    </div>
  );
}

export default DetailsPage;
