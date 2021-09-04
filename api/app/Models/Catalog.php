<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Catalog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'category'
    ];

    /**
     * Get all of the brands for the Catalog
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Brands(): HasMany
    {
        return $this->hasMany(Brand::class, 'catalog_id', 'id');
    }
}
