package com.wecp.stockbrokeragefirm.service;
import com.wecp.stockbrokeragefirm.entity.Stock;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockService {

    private final List<Stock> stocks = new ArrayList<>();

    public void addStock(Stock stock) {
        stocks.add(stock);
    }

    public List<Stock> getAllStocks() {
        return stocks;
    }
}

