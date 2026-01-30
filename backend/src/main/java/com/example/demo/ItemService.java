package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ItemService {
    private final List<Item> items = new ArrayList<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    public ItemService() {
        // 初期データ
        items.add(new Item(idGenerator.getAndIncrement(), "サンプル", "初期データです"));
    }

    public List<Item> findAll() {
        return Collections.unmodifiableList(items);
    }

    public Item create(ItemRequest request) {
        Item item = new Item(idGenerator.getAndIncrement(), request.getName(), request.getDescription());
        items.add(item);
        return item;
    }
}
