package com.wecp.stockbrokeragefirm.controller;

import com.wecp.stockbrokeragefirm.entity.Stock;
import com.wecp.stockbrokeragefirm.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping
    public ResponseEntity<String> addStock(@RequestBody Stock stock) {
        stockService.addStock(stock);
        return new ResponseEntity<>("Stock added successfully", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Stock>> getAllStocks() {
        List<Stock> stocks = stockService.getAllStocks();
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }
}
