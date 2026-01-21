package com.example.demo;

// 一覧に表示するデータ
public class Item {
    private final long id;
    private final String name;
    private final String description;

    public Item(long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
