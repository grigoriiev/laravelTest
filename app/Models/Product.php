<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;

    use SoftDeletes;

    public $incrementing = true;

    protected $primaryKey = 'ID';

    protected $guarded=[];

    public $timestamps = true;


    protected $casts = [
        'DATA' => 'array'
    ];
    /**
     * Scope a query to only available products.
     */
    public function statusAvailable(Builder $query): void
    {
        $query->where('STATUS', '=','available');
    }


   public function setDATAAttribute($value)
    {
        $properties = [];

        foreach ($value as $array_item) {
            if (!is_null($array_item['key'])) {
                $properties[] = $array_item;
            }
        }

        $this->attributes['DATA'] = json_encode($properties);
    }

}
